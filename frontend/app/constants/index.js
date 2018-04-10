export const IS_MOBILE = window.innerWidth < 768
export const IS_TABLET = (window.innerWidth > 767 && window.innerWidth < 1025)
export const HAVE_MONITOR_PLUGIN = window.INITIAL_STATE.pluginStatus.some(p => (p.name === 'MonitorPlugin' && p.isEnabled))
export const HAVE_REPORT_PLUGIN = window.INITIAL_STATE.pluginStatus.some(p => (p.name === 'ReportPlugin' && p.isEnabled))
export const CHART_COLORS = [
    '#004D90',
    '#77008F',
    '#30008F',
    '#8F0000',
    '#FFBF00',
    '#6B8F00',
    '#008F5F',
    '#00188F',
    '#47008F',
    '#8F005F',
    '#FF4000',
    '#C19100',
    '#478F00',
    '#008F8F',
    '#18008F',
    '#5F008F',
    '#8F0030',
    '#FF8000',
    '#8F8F00',
    '#008F00',

    '#004D90',
    '#77008F',
    '#30008F',
    '#8F0000',
    '#FFBF00',
    '#6B8F00',
    '#008F5F',
    '#00188F',
    '#47008F',
    '#8F005F',
    '#FF4000',
    '#C19100',
    '#478F00',
    '#008F8F',
    '#18008F',
    '#5F008F',
    '#8F0030',
    '#FF8000',
    '#8F8F00',
    '#008F00',
]
// filters
export const ALL = 'ALL'
export const WORK = 'WORK'
export const WARNING = 'WARNING'
export const OFFLINE = 'OFFLINE'

//modes
export const TABLE = 'TABLE'
export const CARD = 'CARD'
