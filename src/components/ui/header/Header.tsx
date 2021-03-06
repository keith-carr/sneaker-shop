import * as React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from '../../../Link'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography/Typography'

import Headertabs from './headertabs/Headertabs'
import Sidedrawer from './sidedrawer/Sidedrawer'

import { MouseEvent } from '../../../types/aliases' // TYPE - Events
import { color } from '@/src/ColorPalette'
import { SectionMargin } from '../Section'
import Box from '@material-ui/core/Box/Box'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
// import { Product } from 'shopify-buy'

interface Props {
  pageValue: number
  setPageValue: React.Dispatch<React.SetStateAction<number>>
  // product: Product
}

interface HideOnScrollProps {
  children?: any
}

export interface Route {
  name: string
  link: any
  activeIndex: number
  selectIndex?: number
  ariaOwns?: string
  ariaHasPopup?: string
  mouseOver?: any
  tabStyle: "tab" | "tabs" | "tabHome" | "tabCart" | "indicator"

}

export interface MenuOption {
  name: string
  link: string
  activeIndex: number
  selectedIndex: number
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props

  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "95%",  
    fontFamily: 'Inter',
    [theme.breakpoints.up('sm')]: {
      marginTop: 25,
      paddingLeft: 20,
    },
  },
  colors: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
  },
  tabs: {
    color: '#fff',
  },
}))

export default function Header(props: Props) {
  const classes = useStyles() //useStyles is a funct that will build the classes object
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const router = useRouter()

  const handleClick = (e: MouseEvent) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  const handleClose = () => setOpenMenu(false)

  const routes: Route[] = [
    { name: 'Home', link: '/', activeIndex: 0, tabStyle: 'tabHome' },
    {
      name: 'Shop',
      link: '/catalog',
      activeIndex: 1,
      tabStyle: 'tabs',
    },
    // { name: 'Contact Us', link: '/contact-us', activeIndex: 2 },
    { name: 'My Cart', link: '/cart', activeIndex: 2, tabStyle: 'tabCart' },
  ]

  useEffect(() => {
    ;[...routes].forEach((route: any) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.pageValue !== route.activeIndex) {
            props.setPageValue(route.activeIndex)
          }
          break
        default:
          break
      }
    })
  }, [props, props.pageValue, routes])

  const tabs = (
    <Headertabs
      pageValue={props.pageValue}
      setPageValue={props.setPageValue}
      routes={routes}
      anchorEl={anchorEl}
      openMenu={openMenu}
      handleClose={handleClose}
    />
  )

  const sidedrawer = (
    <Sidedrawer
      routes={routes}
      pageValue={props.pageValue}
      setPageValue={props.setPageValue}
    />
  )

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        classes={{ root: classes.colors + ' ' + classes.container }}
      >
        <Toolbar>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="body2" component="div">
                <Grid container>{matches ? sidedrawer : tabs}</Grid>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
