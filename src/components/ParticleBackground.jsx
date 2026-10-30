import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },

      fpsLimit: 30,

      background: {
        color: {
          value: 'transparent',
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: {
            enable: true,
          },
        },

        modes: {
          grab: {
            distance: 120,
            links: {
              opacity: 0.16,
            },
          },
        },
      },

      particles: {
        color: {
          value: '#D99A65',
        },

        links: {
          color: '#D99A65',
          distance: 140,
          enable: true,
          opacity: 0.08,
          width: 0.7,
        },

        move: {
          enable: true,
          speed: 0.35,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'out',
          },
        },

        number: {
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
          value: 28,
        },

        opacity: {
          value: {
            min: 0.08,
            max: 0.28,
          },
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.08,
            sync: false,
          },
        },

        shape: {
          type: 'circle',
        },

        size: {
          value: {
            min: 1,
            max: 2,
          },
        },
      },

      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default ParticleBackground;