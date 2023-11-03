import PropTypes from 'prop-types'

export { Link }

Link.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.any,
  description: PropTypes.string,
  className: PropTypes.string,
}

function Link(props) {
  return (
    <a href={props.href} className={props.className}>
      {props.icon} {props.description}
    </a>
  )
}
