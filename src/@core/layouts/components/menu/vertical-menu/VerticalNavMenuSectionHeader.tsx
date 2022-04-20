// @ts-nocheck
// ** Third Party Components
import { MoreHorizontal } from 'ts-react-feather-icons'

const VerticalNavMenuSectionHeader = ({ item }) => {
  return (
    <li className='navigation-header'>
      <span>{item.header}</span>
      <MoreHorizontal className='feather-more-horizontal' />
    </li>
  )
}

export default VerticalNavMenuSectionHeader
