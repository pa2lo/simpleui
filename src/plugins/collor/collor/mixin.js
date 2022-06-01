export default {
    methods: {
        setColorValue(color) {
            let rgba = { r: 0, g: 0, b: 0, a: 1 }
            if (/#/.test(color)) {
                rgba = this.hex2rgb(color)
            } else if (/rgb/.test(color)) {
                rgba = this.rgb2rgba(color)
            } else if (typeof color === 'string') {
                rgba = this.rgb2rgba(`rgba(${color})`)
            } else if (Object.prototype.toString.call(color) === '[object Object]') {
                rgba = color
            }
            const { r, g, b, a } = rgba
            const { h, s, v } = this.rgb2hsv(rgba)
            return { r, g, b, a: a === undefined ? 1 : a, h, s, v }
        },
        rgb2hex({ r, g, b }, toUpper) {
            const change = val => ('0' + Number(val).toString(16)).slice(-2)
            const color = `#${change(r)}${change(g)}${change(b)}`
            return toUpper ? color.toUpperCase() : color
        },
        hex2rgb(hex) {
            hex = hex.slice(1)
            const change = val => parseInt(val, 16) || 0
			if (hex.length == 3) hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
			return {
				r: change(hex.slice(0, 2)),
				g: change(hex.slice(2, 4)),
				b: change(hex.slice(4, 6))
			}
        },
        rgb2rgba(rgba) {
            if (typeof rgba === 'string') {
                rgba = (/rgba?\((.*?)\)/.exec(rgba) || ['', '0,0,0,1'])[1].split(',')
                return {
                    r: Number(rgba[0]) || 0,
                    g: Number(rgba[1]) || 0,
                    b: Number(rgba[2]) || 0,
                    a: Number(rgba[3] ? rgba[3] : 1)
                }
            } else {
                return rgba
            }
        },
        rgb2hsv({ r, g, b }) {
            var max = Math.max(r, g, b), min = Math.min(r, g, b),
				d = max - min,
				h,
				s = (max === 0 ? 0 : d / max),
				v = max / 255;
			switch (max) {
				case min: h = 0; break;
				case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
				case g: h = (b - r) + d * 2; h /= 6 * d; break;
				case b: h = (r - g) + d * 4; h /= 6 * d; break;
			}
			return { h, s, v };
        },
		hsv2rgb({ h, s, v }) {
			var r, g, b, i, f, p, q, t;
			i = Math.floor(h * 6);
			f = h * 6 - i;
			p = v * (1 - s);
			q = v * (1 - f * s);
			t = v * (1 - (1 - f) * s);
			switch (i % 6) {
				case 0: r = v, g = t, b = p; break;
				case 1: r = q, g = v, b = p; break;
				case 2: r = p, g = v, b = t; break;
				case 3: r = p, g = q, b = v; break;
				case 4: r = t, g = p, b = v; break;
				case 5: r = v, g = p, b = q; break;
			}
			return {
				r: Math.round(r * 255),
				g: Math.round(g * 255),
				b: Math.round(b * 255)
			}
		}
    }
}