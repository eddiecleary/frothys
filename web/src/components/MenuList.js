import React from 'react';
import styled from 'styled-components';
import formatMoney from '../utils/formatMoney';

function MenuItem({info}) {
  return (
    <tr>
      <td>{info.name}</td>
      <td className="dots"></td>
      <td>{`${formatMoney(info.price)}`}</td>
    </tr>
  )
}

function MenuItems({items}) {
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item._key} info={item} />
      ))}
    </>
  )
}

function Menu({menu}) {
  return (
    <MenuStyles>
      <table className="menu">
        <thead>
          <tr>
            <th><img src={menu.icon.asset.url} /><h3>{menu.name}</h3></th>
          </tr>
        </thead>
        <tbody>
          <MenuItems items={menu.items} />
        </tbody>
      </table>
    </MenuStyles>
  )
}

export default function MenuList({ menus }) {
  return (
    <MenuListStyles>
      {menus.map((menu) => (
        <Menu key={menu.node.id} menu={menu.node} />
      ))}
    </MenuListStyles>
  )
}

const MenuStyles = styled.div`

`;

const MenuListStyles = styled.div`

`;