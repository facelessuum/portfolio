import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export function Icon({ className = '', ...props }: FontAwesomeIconProps) {
  // Font Awesome 0.2 relies on defaultProps, which React 19 no longer applies.
  // Its renderer calls className.split(), so always supply a string explicitly.
  return <FontAwesomeIcon {...props} className={className} />
}
