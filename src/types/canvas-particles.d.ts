declare module 'canvas-particles' {
    interface ParticlesOptions {
      particles: {
        number: {
          value: number;
          density: {
            enable: boolean;
            value_area: number;
          };
        };
        color: {
          value: string;
        };
        shape: {
          type: 'circle';
          stroke: {
            width: number;
            color: string;
          };
          polygon: {
            nb_sides: number;
          };
        };
        opacity: {
          value: number;
          random: boolean;
          anim: {
            enable: boolean;
            speed: number;
            opacity_min: number;
            sync: boolean;
          };
        };
        // Additional particle configuration options...
      };
    }
  
    interface ParticlesProps {
      style?: React.CSSProperties;
      options: ParticlesOptions;
    }
  
    const Particles: React.FC<ParticlesProps>;
    export default Particles;
  }