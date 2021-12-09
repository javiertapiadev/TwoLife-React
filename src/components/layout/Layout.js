import styled from 'styled-components'
import NavBar from './NavBar'
import Footer from './Footer'

const LayoutContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto minmax(0,1fr) auto;
`

const Layout = (props) => {
    return (
        <LayoutContainer>
            <NavBar />
            <main> {props.children} </main>
            <Footer />
        </LayoutContainer>
    )
}

export default Layout