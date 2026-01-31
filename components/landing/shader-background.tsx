"use client";

import { useEffect, useRef } from "react";

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const vertexShaderRef = useRef<WebGLShader | null>(null);
  const fragmentShaderRef = useRef<WebGLShader | null>(null);
  const positionBufferRef = useRef<WebGLBuffer | null>(null);
  const positionLocationRef = useRef<number>(0);
  const timeLocationRef = useRef<WebGLUniformLocation | null>(null);
  const resolutionLocationRef = useRef<WebGLUniformLocation | null>(null);
  const animationIdRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    glRef.current = gl;

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader - animated mesh gradient
    const fragmentShaderSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      
      // Simplex noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
      
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m; m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        // Create flowing multi-layered noise
        float noise1 = snoise(uv * 2.0 + u_time * 0.08);
        float noise2 = snoise(uv * 3.5 - u_time * 0.12 + 100.0);
        float noise3 = snoise(uv * 1.5 + u_time * 0.06 + 200.0);
        float noise4 = snoise(uv * 5.0 + u_time * 0.15 + 300.0);
        
        // Richer emerald/teal/cyan color palette
        vec3 color1 = vec3(0.04, 0.55, 0.45);  // Vibrant teal
        vec3 color2 = vec3(0.06, 0.72, 0.55);  // Bright emerald
        vec3 color3 = vec3(0.02, 0.35, 0.42);  // Deep ocean teal
        vec3 color4 = vec3(0.08, 0.82, 0.62);  // Mint emerald
        vec3 color5 = vec3(0.03, 0.48, 0.58);  // Cyan accent
        
        // Create morphing blobs
        float blob1 = smoothstep(0.3, 0.7, sin(uv.x * 3.14159 + u_time * 0.5) * sin(uv.y * 3.14159 + u_time * 0.3) + noise1);
        float blob2 = smoothstep(0.2, 0.8, sin(uv.x * 2.0 - u_time * 0.4) * cos(uv.y * 2.5 + u_time * 0.6) + noise2);
        
        // Mix colors based on noise and position
        float blend1 = smoothstep(-0.5, 0.5, noise1);
        float blend2 = smoothstep(-0.3, 0.7, noise2);
        float blend3 = smoothstep(-0.4, 0.6, noise3);
        
        vec3 color = mix(color1, color2, blend1);
        color = mix(color, color3, blend2 * 0.6);
        color = mix(color, color4, blend3 * 0.4);
        color = mix(color, color5, blob1 * 0.3);
        
        // Add pulsing glow spots
        float glow = snoise(uv * 4.0 + u_time * 0.2);
        glow = pow(smoothstep(0.2, 0.9, glow), 2.0) * 0.2;
        color += glow * color4;
        
        // Add subtle sparkles
        float sparkle = snoise(uv * 15.0 + u_time * 0.5);
        sparkle = pow(max(0.0, sparkle), 8.0) * 0.3;
        color += sparkle;
        
        // Radial gradient for depth
        float radial = 1.0 - length((uv - vec2(0.5, 0.3)) * vec2(1.2, 1.0));
        radial = smoothstep(0.0, 1.0, radial);
        color *= 0.8 + radial * 0.4;
        
        // Fade at edges for blending
        float vignette = 1.0 - length((uv - 0.5) * 1.3);
        vignette = smoothstep(0.0, 0.8, vignette);
        
        // Enhanced opacity with vignette
        float alpha = 0.18 * vignette;
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    const positionLocation = gl.getAttribLocation(program, "a_position");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    function resize() {
      if (!canvas) return;
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
    }

    programRef.current = program;
    vertexShaderRef.current = vertexShader;
    fragmentShaderRef.current = fragmentShader;
    positionBufferRef.current = positionBuffer;
    positionLocationRef.current = positionLocation;
    timeLocationRef.current = timeLocation;
    resolutionLocationRef.current = resolutionLocation;

    function render() {
      const gl = glRef.current;
      const program = programRef.current;
      const positionBuffer = positionBufferRef.current;
      const positionLocation = positionLocationRef.current;
      const timeLocation = timeLocationRef.current;
      const resolutionLocation = resolutionLocationRef.current;
      const canvas = canvasRef.current;
      const animationId = animationIdRef.current;
      const startTime = startTimeRef.current;

      if (!gl || !canvas || !program || !positionBuffer || !timeLocation || !resolutionLocation) return;
      resize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      const time = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationIdRef.current = requestAnimationFrame(render);
    }

    animationIdRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      const gl = glRef.current;
      const program = programRef.current;
      const vertexShader = vertexShaderRef.current;
      const fragmentShader = fragmentShaderRef.current;
      const positionBuffer = positionBufferRef.current;

      if (gl) {
        if (program) gl.deleteProgram(program);
        if (vertexShader) gl.deleteShader(vertexShader);
        if (fragmentShader) gl.deleteShader(fragmentShader);
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
