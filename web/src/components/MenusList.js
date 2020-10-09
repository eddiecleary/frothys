import React from 'react';
import styled from 'styled-components';
import formatMoney from '../utils/formatMoney';

export default function MenusList({ menus }) {
  return (
    <MenusListStyles>
      {menus.map((menu) => (
        <Menu key={menu.node.id} menu={menu.node} />
      ))}
    </MenusListStyles>
  )
}

function Menu({menu}) {
  return (
    <MenuStyles>
      <table className="menu">
        <thead>
          <tr>
            {/* <img alt={menu.icon.alt} src={menu.icon.asset.url} /> */}
            <th><h3>{menu.name}</h3></th>
          </tr>
        </thead>
        <tbody>
          <MenuItemsList items={menu.items} />
        </tbody>
      </table>
    </MenuStyles>
  )
}

function MenuItemsList({items}) {
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item._key} info={item} />
      ))}
    </>
  )
}

function MenuItem({info}) {
  return (
    <tr>
      <td>{info.name}</td>
      <td className="dots"></td>
      <td>{`${formatMoney(info.price)}`}</td>
    </tr>
  )
}

const MenusListStyles = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;

    article {
      flex-basis: 50%;

      &:first-of-type {
        margin-right: 8rem;
      }
    }
  }
`

const MenuStyles = styled.article`

  table {
    width: 100%;
    margin-top: 8rem;

    th {
    display: flex;
    align-items: flex-end;
    text-align: center;
    justify-content: center;
    margin-bottom: 3rem;

      img {
        width: 45px;
        margin-right: 0.7rem;
      }
    }

    tbody {
      tr {
        margin-top: 2rem;
        display: flex;
        align-items: baseline;
      }

      .dots {
        flex: 1;
        border-bottom: 2px dashed var(--black);
        margin-left: 1rem;
      }

      td:last-of-type {
        margin-left: 1rem;
      }
    }
  }
`;