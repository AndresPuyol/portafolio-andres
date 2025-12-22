tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0f172a', // Slate 900
                secondary: '#3b82f6', // Blue 500
                accent: '#10b981', // Emerald 500
                darkbg: '#1e293b',
                lightbg: '#f8fafc'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'scroll-left': 'scrollLeft 40s linear infinite',
                'blob': 'blob 10s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                scrollLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
}
