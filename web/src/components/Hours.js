import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

export default function Hours() {
  const data = useStaticQuery(graphql`
    query hours {
      sanitySiteSettings {
        hours {
          day
          hours
        }
      }
    }
  `);

  const hours = data.sanitySiteSettings.hours;

  return(
    <StyledHours>
      <table>
        <thead>
          <tr>
            <th className="h3" colSpan="2">Hours</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, i) => (
            <tr key={i}>
              <td>{hour.day}</td>
              <td>{hour.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledHours>
  )
}

const StyledHours = styled.article`
  a {
    text-decoration: none;
    color: var(--black);
  }

  table {
    width: 80%;
    max-width: 200px;
    margin: 0 auto;

    tbody {

      tr{
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
      }

      td:last-of-type {
        text-align: right;
      }
    }
  }

  @media (min-width: 768px) {
    
    table {
      max-width: 250px;
    }
  }
`

