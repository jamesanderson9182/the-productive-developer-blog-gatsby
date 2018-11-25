import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

      header = (
        <div
            css={{
                height: '177px',
                backgroundColor: '#f5f5f5',
                width: '100%',
                textAlign: 'center',
                marginBottom: '20px',
                '@media (max-width: 750px)':
                {
                    height: '100px'
                },
                '@media (max-width: 500px)':
                    {
                        height: '177px'
                    }
        }}
        >
            <h1
              css= {{
                  ...scale(1.5),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                  fontSize: '3.250rem',
                  '@media (max-width: 750px)':
                      {
                          width: '100%',
                          fontSize: '2.250rem',
                          marginBottom: '0'
                      }
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {title}
              </Link>
            </h1>
            <p>Your productivity booster</p>
        </div>
      )
    return (
      <div>
        {header}
        <div
            css={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '66.66666667%',
                '@media (max-width: 750px)':
                    {
                        width: '100%',
                        padding: '0 20px'
                    },
                '@media (max-width: 310px)':
                    {
                        width: '100%',
                        padding: '0 5px'
                    }
            }}
        >
            {children}
        </div>
      </div>
    )
  }
}

export default Layout
