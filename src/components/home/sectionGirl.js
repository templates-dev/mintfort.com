import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { flex, phone, rem } from 'library/utils'

import DividerStart from 'components/backgrounds/start'
import LinesDivider from 'components/backgrounds/linesDivider'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  transition: height .2s;

  ${flex}
`

const ImageWrapper = styled.div`
  width: ${rem(300)};
  margin-top: 20px;

  ${phone(css`
    width: ${rem(200)};
  `)}
`

const SectionGirl = () => (
  <StaticQuery
    query={query}
    render={({ img }) => (
      <Wrapper>
        <LinesDivider style={{
          marginBottom: 100
        }}/>
        <ImageWrapper>
          <Fade>
            <GatsbyImg
              alt='Mintfort app'
              title='Mintfort app'
              fluid={img.childImageSharp.fluid}
            />
          </Fade>
          <DividerStart style={{ zIndex: 1 }}/>
        </ImageWrapper>
      </Wrapper>
    )}
  />
)

export default SectionGirl

const query = graphql`
  {
    img: file(relativePath: { regex: "/girl-with-phone/"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`