/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Cycle = () => {

  const labels = false
  const tag = 'forests'
  const data = {"stock": {"geological": true, "land": false, "ocean": false, "material": false}, "flux": [{ "from": "atmosphere", "to": "geological", "type": "enhanced"}]}

  const context = useThemeUI()
  const theme = context.theme

  const sxStock = (stock) => {
    const enhanced = data.flux.filter((fx) => 
      (fx.from == stock) &&
      (fx.type == 'enhanced')
    )
    if (data.stock[stock] || (enhanced.length > 0)) return theme.tags[tag]
    else return 'secondary'
  }

  const sxStockInner = (stock) => {
    if (data.stock[stock]) return theme.tags[tag]
    else return 'none'
  }

  const sxFlux = (flux) => {
    const enhanced = data.flux.filter((fx) => 
      (fx.from == flux.from) &&
      (fx.to == flux.to) &&
      (fx.type == 'enhanced')
    )
    const avoided = data.flux.filter((fx) => 
      (fx.from == flux.from) &&
      (fx.to == flux.to) &&
      (fx.type == 'avoided')
    )
    if (avoided.length > 0) {
      return 'none'
    } else if (enhanced.length > 0) {
      return theme.tags[tag]
    } else {
      return 'secondary'
    }
  }

  const sxFluxAvoided = (flux) => {
    const avoided = data.flux.filter((fx) => 
      (fx.from == flux.from) &&
      (fx.to == flux.to) &&
      (fx.type == 'avoided')
    )
    if (avoided.length > 0) return theme.tags[tag]
    else return 'none'
  }

  return <Box sx={{ 
      ml: ['-8px'], 
      mt: ['-23px'],
      mb: ['-5px'],
      transform: 'scale(0.75)', 
      transformOrigin: 'left'
    }}>
    <svg 
      height={labels ? '150px' : '123px'} 
      width='270px'
      stroke='none'
      strokeWidth='1px'
      strokeLinecap='round'
      strokeMiterlimit='10'
      fill='none'
    >
      <rect sx={{ fill: 'muted' }} x="11.3" y="14.4" width="248.8" height="25.9"/>
      <path sx={{ fill: sxStock('land') }} d="M179.1,108.2c-9.4,0-17-7.6-17-17c0-9.4,7.6-17,17-17s17,7.6,17,17C196.1,100.5,188.5,108.2,179.1,108.2z M179.1,76.1
        c-8.3,0-15,6.8-15,15c0,8.3,6.8,15,15,15s15-6.8,15-15C194.1,82.8,187.4,76.1,179.1,76.1z"/>
      <path sx={{ fill: sxStock('geological') }} d="M33.6,108.2c-9.4,0-17-7.6-17-17c0-9.4,7.6-17,17-17s17,7.6,17,17C50.7,100.5,43,108.2,33.6,108.2z M33.6,76.1
        c-8.3,0-15,6.8-15,15c0,8.3,6.8,15,15,15c8.3,0,15-6.8,15-15C48.7,82.8,41.9,76.1,33.6,76.1z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'ocean'}) }} d="M246.9,64.5c-0.3,0-0.6-0.1-0.8-0.4l-7.1-9c-0.3-0.4-0.3-1.1,0.2-1.4c0.4-0.3,1.1-0.3,1.4,0.2l7.1,9
        c0.3,0.4,0.3,1.1-0.2,1.4C247.3,64.4,247.1,64.5,246.9,64.5z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'ocean'}) }} d="M247.1,64.5c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-1-0.2-1.4l7.1-9c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4l-7.1,9
        C247.7,64.4,247.4,64.5,247.1,64.5z"/>
      <path sx={{ fill: sxStock('material') }} d="M100.1,108.2c-9.4,0-17-7.6-17-17c0-9.4,7.6-17,17-17s17,7.6,17,17C117.1,100.5,109.5,108.2,100.1,108.2z M100.1,76.1
        c-8.3,0-15,6.8-15,15c0,8.3,6.8,15,15,15s15-6.8,15-15C115.1,82.8,108.4,76.1,100.1,76.1z"/>
      <path sx={{ fill: sxFlux({from: 'land', to: 'material'}) }} d="M162.7,91.9h-36.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h36.3c0.6,0,1,0.4,1,1S163.3,91.9,162.7,91.9z"/>
      <path sx={{ fill: sxFlux({from: 'land', to: 'material'}) }} d="M126,91.8c-0.3,0-0.6-0.1-0.8-0.4c-0.3-0.4-0.3-1.1,0.2-1.4l9-7.1c0.4-0.3,1.1-0.3,1.4,0.2c0.3,0.4,0.3,1.1-0.2,1.4l-9,7.1
        C126.5,91.8,126.2,91.8,126,91.8z"/>
      <path sx={{ fill: sxFlux({from: 'land', to: 'material'}) }} d="M135.1,99.2c-0.2,0-0.4-0.1-0.6-0.2l-9-7.1c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l9,7.1c0.4,0.3,0.5,1,0.2,1.4
        C135.6,99,135.3,99.2,135.1,99.2z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'ocean'}) }} d="M247,64.1c-0.6,0-1-0.4-1-1V26.8c0-0.6,0.4-1,1-1s1,0.4,1,1v36.3C248,63.7,247.5,64.1,247,64.1z"/>
      <path sx={{ fill: sxFlux({from: 'ocean', to: 'atmosphere'}) }} d="M228.7,64.2c-0.6,0-1-0.4-1-1V26.8c0-0.6,0.4-1,1-1s1,0.4,1,1v36.3C229.7,63.7,229.3,64.2,228.7,64.2z"/>
      <path sx={{ fill: sxStock('land') }} d="M179.1,108.2c-9.4,0-17-7.6-17-17c0-9.4,7.6-17,17-17s17,7.6,17,17C196.1,100.5,188.5,108.2,179.1,108.2z M179.1,76.1
        c-8.3,0-15,6.8-15,15c0,8.3,6.8,15,15,15s15-6.8,15-15C194.1,82.8,187.4,76.1,179.1,76.1z"/>
      <path sx={{ fill: sxFlux({from: 'ocean', to: 'atmosphere'}) }} d="M235.9,36.6c-0.3,0-0.6-0.1-0.8-0.4l-7.1-9c-0.3-0.4-0.3-1.1,0.2-1.4c0.4-0.3,1.1-0.3,1.4,0.2l7.1,9
        c0.3,0.4,0.3,1.1-0.2,1.4C236.4,36.6,236.1,36.6,235.9,36.6z"/>
      <path sx={{ fill: sxFlux({from: 'ocean', to: 'atmosphere'}) }} d="M221.5,36.6c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-1-0.2-1.4l7.1-9c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4l-7.1,9
        C222.1,36.5,221.8,36.6,221.5,36.6z"/>
      <circle sx={{ fill: sxStockInner('material') }} cx="100.1" cy="91.1" r="7.7"/>
      <circle sx={{ fill: sxStockInner('land') }} cx="179.2" cy="91.1" r="7.7"/>
      <circle sx={{ fill: sxStockInner('ocean') }} cx="237.5" cy="91.1" r="7.7"/>
      <circle sx={{ fill: sxStockInner('geological') }} cx="33.6" cy="91.1" r="7.7"/>
      <path sx={{ fill: sxFlux({from: 'land', to: 'atmosphere'}) }} d="M177.4,36.6c-0.3,0-0.6-0.1-0.8-0.4l-7.1-9c-0.3-0.4-0.3-1.1,0.2-1.4c0.4-0.3,1.1-0.3,1.4,0.2l7.1,9
        c0.3,0.4,0.3,1.1-0.2,1.4C177.8,36.6,177.6,36.6,177.4,36.6z"/>
      <path sx={{ fill: sxFlux({from: 'land', to: 'atmosphere'}) }} d="M162.9,36.6c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-1-0.2-1.4l7.1-9c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4l-7.1,9
        C163.5,36.5,163.2,36.6,162.9,36.6z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'land'}) }} d="M188.3,64.5c-0.3,0-0.6-0.1-0.8-0.4l-7.1-9c-0.3-0.4-0.3-1.1,0.2-1.4c0.4-0.3,1.1-0.3,1.4,0.2l7.1,9
        c0.3,0.4,0.3,1.1-0.2,1.4C188.8,64.4,188.6,64.5,188.3,64.5z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'land'}) }} d="M188.5,64.5c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-1-0.2-1.4l7.1-9c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4l-7.1,9
        C189.1,64.4,188.8,64.5,188.5,64.5z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'land'}) }} d="M188.4,64.1c-0.6,0-1-0.4-1-1V26.8c0-0.6,0.4-1,1-1s1,0.4,1,1v36.3C189.4,63.7,189,64.1,188.4,64.1z"/>
      <path sx={{ fill: sxFlux({from: 'land', to: 'atmosphere'}) }} d="M170.2,64.2c-0.6,0-1-0.4-1-1V26.8c0-0.6,0.4-1,1-1s1,0.4,1,1v36.3C171.2,63.7,170.7,64.2,170.2,64.2z"/>
      <path sx={{ fill: sxFlux({from: 'geological', to: 'atmosphere'}) }} d="M32.1,36.6c-0.3,0-0.6-0.1-0.8-0.4l-7.1-9c-0.3-0.4-0.3-1.1,0.2-1.4c0.4-0.3,1.1-0.3,1.4,0.2l7.1,9c0.3,0.4,0.3,1.1-0.2,1.4
        C32.5,36.6,32.3,36.6,32.1,36.6z"/>
      <path sx={{ fill: sxFlux({from: 'geological', to: 'atmosphere'}) }} d="M17.6,36.6c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-1-0.2-1.4l7.1-9c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4l-7.1,9
        C18.2,36.5,17.9,36.6,17.6,36.6z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'geological'}) }} d="M43.1,64.5c-0.3,0-0.6-0.1-0.8-0.4l-7.1-9c-0.3-0.4-0.3-1.1,0.2-1.4c0.4-0.3,1.1-0.3,1.4,0.2l7.1,9c0.3,0.4,0.3,1.1-0.2,1.4
        C43.5,64.4,43.3,64.5,43.1,64.5z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'geological'}) }} d="M43.3,64.5c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-1-0.2-1.4l7.1-9c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4l-7.1,9
        C43.8,64.4,43.6,64.5,43.3,64.5z"/>
      <path sx={{ fill: sxFlux({from: 'atmosphere', to: 'geological'}) }} d="M43.1,64.1c-0.6,0-1-0.4-1-1V26.8c0-0.6,0.4-1,1-1s1,0.4,1,1v36.3C44.1,63.7,43.7,64.1,43.1,64.1z"/>
      <path sx={{ fill: sxFlux({from: 'geological', to: 'atmosphere'}) }} d="M24.9,64.2c-0.6,0-1-0.4-1-1V26.8c0-0.6,0.4-1,1-1s1,0.4,1,1v36.3C25.9,63.7,25.4,64.2,24.9,64.2z"/>
      <path sx={{ fill: sxStock('ocean') }} d="M237.4,108.2c-9.4,0-17-7.6-17-17c0-9.4,7.6-17,17-17s17,7.6,17,17C254.5,100.5,246.8,108.2,237.4,108.2z M237.4,76.1
        c-8.3,0-15,6.8-15,15c0,8.3,6.8,15,15,15s15-6.8,15-15C252.5,82.8,245.7,76.1,237.4,76.1z"/>
      <path sx={{ fill: sxFluxAvoided({from: 'geological', to: 'atmosphere'}) }} d="M18.8,48.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l12.1-12.1c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L19.5,47.8
        C19.3,48,19,48.1,18.8,48.1z"/>
      <path sx={{ fill: sxFluxAvoided({from: 'geological', to: 'atmosphere'}) }} d="M30.9,48.1c-0.3,0-0.5-0.1-0.7-0.3L18.1,35.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l12.1,12.1c0.4,0.4,0.4,1,0,1.4
        C31.4,48,31.1,48.1,30.9,48.1z"/>
      <path sx={{ fill: sxFluxAvoided({from: 'geological', to: 'atmosphere'}) }} d="M24.9,64.2c-0.6,0-1-0.4-1-1V26.8c0-0.6,0.4-1,1-1s1,0.4,1,1v36.3C25.9,63.7,25.4,64.2,24.9,64.2z"/>
      <path sx={{ fill: sxFluxAvoided({from: 'land', to: 'atmosphere'}) }} d="M164,48.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l12.1-12.1c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-12.1,12.1
        C164.6,48,164.3,48.1,164,48.1z"/>
      <path sx={{ fill: sxFluxAvoided({from: 'land', to: 'atmosphere'}) }} d="M176.1,48.1c-0.3,0-0.5-0.1-0.7-0.3l-12.1-12.1c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l12.1,12.1c0.4,0.4,0.4,1,0,1.4
        C176.7,48,176.4,48.1,176.1,48.1z"/>
      <path sx={{ fill: sxFluxAvoided({from: 'land', to: 'atmosphere'}) }} d="M170.2,64.2c-0.6,0-1-0.4-1-1V26.8c0-0.6,0.4-1,1-1s1,0.4,1,1v36.3C171.2,63.7,170.7,64.2,170.2,64.2z"/>
      <path sx={{ fill: sxFluxAvoided({from: 'ocean', to: 'atmosphere'}) }} d="M222.6,48.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4L234,34.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-12.1,12.1
        C223.1,48,222.9,48.1,222.6,48.1z"/>
      <path sx={{ fill: sxFluxAvoided({from: 'ocean', to: 'atmosphere'}) }} d="M234.7,48.1c-0.3,0-0.5-0.1-0.7-0.3l-12.1-12.1c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l12.1,12.1c0.4,0.4,0.4,1,0,1.4
        C235.2,48,235,48.1,234.7,48.1z"/>
      {labels && 
        <>
        <text sx={{ fill: 'text', fontSize: [3] }} x="70" y="34">Atmos</text>
        <text sx={{ fill: 'text', fontSize: [3] }} x="16" y="130">Geo</text>
        <text sx={{ fill: 'text', fontSize: [3] }} x="85" y="130">Mat</text>
        <text sx={{ fill: 'text', fontSize: [3] }} x="164" y="130">Lnd</text>
        <text sx={{ fill: 'text', fontSize: [3] }} x="221" y="130">Ocn</text>
        </>
      }
  </svg>
  </Box>
}

export default Cycle