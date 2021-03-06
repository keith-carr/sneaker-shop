import React from "react";
import Link from "../src/Link";
import { PageAnimations } from "@/src/types/interfaces/animation";
import PageTransition from "@/src/components/ui/hoc/PageTransition";
import Image from "next/image";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import Carousel from "react-material-ui-carousel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { color } from "@/src/ColorPalette";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import theme from "@/src/Theme";
import GridContainer from "@/components/ui/grid/GridContainer";
import ProductCategories from "@/src/landingpage/ProductCategories";
import Footer from "@/src/landingpage/Footer";

interface Props {
  pageAnimations: PageAnimations;
  item: {
    header: string;
    headerPos: {
      top: string
      left: string | undefined
      right: string | undefined
    }
    description: string;
    src: string;
    images: { mobile: { src: string }; desktop: { src: string } };
  };
}

const useStyles = makeStyles((theme) => ({
  buttonHidden: {
    opacity: "0",
  },
  carouselContainer: {
    width: "100%",
  },
  innerLeftBorder: {
    left: "5%",
    width: 0.8,
    height: "15%",
    zIndex: 2,
    position: "absolute",
    transform: "translateY(288%)",
    backgroundColor: `${theme.palette.common.offWhite}`,
  },
  innerRightBorder: {
    right: "5%",
    width: 0.8,
    height: "15%",
    zIndex: 2,
    position: "absolute",
    transform: "translateY(288%)",
    backgroundColor: `${theme.palette.common.offWhite}`,
  },
  margin: {
    marginTop: 20,
  },
  imgWrapper: {
    textAlign: "center",
    position: "relative",
    // maxHeight: '100vh',
    overflow: "hidden",
  },
  imgHeader: {
    position: "absolute",
    // top: "10%",
    // left: "15%",
    font: '1.5rem "Old Standard TT"',
    color: "#eee",
    zIndex: 1,
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
      top: "15%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.7rem",
      left: "70%",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4rem",
    },
  },
  noShadow: {
    boxShadow: "none",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    zIndex: 1,
  },
  relativeContainer: {
    position: "relative",
    borderBottom: "2px solid #444",
  },
  shopNowBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "none",
    color: color.offWhite,
    border: "0.7px solid #ffffff00",
    // backgroundColor: 'rgba(0,0,0, 0.15)',
    padding: "12px 30px 7px",
    zIndex: 1,
    font: "0.9rem Inter",
    letterSpacing: "0.7px",
    borderRadius: 0,
    transition: "border 0.7s, background-color 0.3s",
    backgroundColor: "#1a1a1aba",
    "&:hover": {
      border: "0.7px solid #f6f5fa50",
      borderRadius: '1px',
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
      padding: "18px 48px 12px",
    },
    "&:hover $underline": {
      // backgroundColor: color.caribbeanBlue,
      backgroundColor: `${theme.palette.secondary.main}`,
    },
  },
  underline: {
    height: "1.5px",
    width: "65%",
    margin: "2px auto",
    backgroundColor: "transparent",
    transition: "background-color 0.3s",
  },
}));

function Item(props: Pick<Props, "item">) {
  const classes = useStyles();
  const matches = { sm: useMediaQuery(theme.breakpoints.up("sm")) };
  return (
    <Paper classes={{ root: classes.noShadow }}>
      <div className={classes.imgWrapper}>
        <div style={{ minHeight: matches.sm ? "100vh" : "50vh" }}>
          <Image layout="fill" objectFit="cover" src={props.item.src} />
          <h1 style={{position: 'absolute', top: props.item.headerPos.top, left: props.item.headerPos.left ? props.item.headerPos.left : undefined, 
          right: props.item.headerPos.right ? props.item.headerPos.right : undefined
        }} className={classes.imgHeader}>{props.item.header}</h1>
        </div>
      </div>
    </Paper>
  );
}

const InnerAbstractBorders = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.innerLeftBorder} />
      <div className={classes.innerRightBorder} />
    </>
  );
};

export default function Index({ pageAnimations }: Props) {
  var items = [
    {
      header: "The Sneaker Shop",
      headerPos: {
        top: "10%",
        right: undefined,
        left: "40%",
      }, 
      description: "",
      images: {
        desktop: {
          src: "/assets/images/hero/hero-img-pile-of-sneakers-9:6.jpg",
        },
        mobile: {
          src: "/assets/images/hero/hero-img-pile-of-sneakers-15:16.jpg",
        },
      },
      src: "",
    },
    {
      header: "They Follow Your Lead",
      headerPos: {
        top: "70%",
        right: undefined,
        left: "10%",
      },
      description: "",
      images: {
        desktop: { src: "/assets/images/hero/hero-img-street-skate-9:6.jpg" },
        mobile: { src: "/assets/images/hero/hero-img-street-skate-15:16.jpg" },
      },
      src: "",
    },
    {
      header: "Run. Train. Live.",
      headerPos: {
        top: "10%",
        right: "10%",
        left: undefined,
      },
      description: "",
      images: {
        desktop: { src: "/assets/images/hero/hero-img-marathon-9:6.jpg" },
        mobile: { src: "/assets/images/hero/hero-img-marathon-15:16.jpg" },
      },
      src: "",
    },
    {
      header: "Where Court Legends Live",
      headerPos: {
        top: "10%",
        right: undefined,
        left: "40%",
      },
      description: "",
      images: {
        desktop: { src: "/assets/images/hero/hero-img-shoot-ball-9:6.jpg" },
        mobile: { src: "/assets/images/hero/hero-img-shoot-ball-15:16.jpg" },
      },
      src: "",
    },
  ];
  const classes = useStyles();
  const matches = { sm: useMediaQuery(theme.breakpoints.up("sm")) };

  return (
    <PageTransition
      pageStyle={{ padding: matches.sm ? "0" : "70px 38px 30px" }}
      pageAnimations={pageAnimations}
    >
      <>
        <div className={classes.relativeContainer}>
          <InnerAbstractBorders />
          <div className={classes.overlay} />
          <Button
            className={classes.shopNowBtn}
            component={Link}
            href="/catalog"
          >
            <GridContainer direction="column">
              <>Shop Now</>
              <div className={classes.underline} />
            </GridContainer>
          </Button>
          <Carousel
            indicatorIconButtonProps={{
              style: { opacity: 0, color: "transparent" },
            }}
            indicatorContainerProps={{ style: { height: 0, margin: "-3px" } }}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{ style: { zIndex: 2, opacity: 0.15 } }}
          >
            {items.map((item, i) => {
              item.src = matches.sm
                ? item.images.desktop.src
                : item.images.mobile
                    .src; /* To Avoid functionality on an unmounted component */
              return <Item key={i} item={item} />;
            })}
          </Carousel>
        </div>
        <ProductCategories />
        <Footer />
      </>
    </PageTransition>
  );
}
