import { styled } from "@stitches/react";

export const Page = styled("div", {
    backgroundColor: '#6BEFA3',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
});

export const Sidebar = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const Select = styled("select", {
    margin: '92px 0 0 96px',
    width: '13.494rem',
    height: '2.825rem',
    fontFamily: 'montserrat',
    fontStyle: 'normal',
    textTransform: "uppercase",
    fontWeight: '500',
    fontSize: '15px',
    color: '#333333',
    lineHeight: '18.29px',
    background: '#FFFFFF',
    padding: '14.14px 0 15.05px 22.96px',
    border: '0px',
    borderRadius: '10px',
});

export const Logo = styled("div", {
    display: 'flex',
    alignItems: 'center',
})

export const ImageLogo = styled("img", {
    width: '3.706rem',
    height: '3.457rem',
    margin: '0 1.417rem 0 5.988rem',

})

export const TextLogo = styled("p", {
    fontFamily: 'montserrat',
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '36.57px',
    color: '#FFFFFF',
    textTransform: "uppercase",
})

export const Contest = styled("p", {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '6rem',
    marginBottom: '5.798rem'
})

export const ContestText = styled("p", {
    fontFamily: 'montserrat',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '17.07px',
    letterSpacing: '0.135EM',
    marginBottom: '0.901rem',
    textTransform: "uppercase",
    color: "#FFFFFF"
})

export const ContestNumber = styled("p", {
    fontFamily: 'montserrat',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '24.38px',
    color: '#FFFFFF',
})

export const Result = styled("div", {
    display: 'flex',
    backgroundColor: '#EFEFEF',
    width: 'calc(100vw - 613px)',
    borderRadius: '170px 0 0 170px',
    flexDirection: 'column',
    justifyContent: 'center',
});

export const ResultNumbers = styled("div", {
    display: 'flex',
    marginLeft: '1.662rem',
    flexWrap: 'wrap',
});

export const Number = styled("div", {
    width: '111.2px',
    height: '6.648rem',
    background: '#FFFFFF',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2.188rem',
    marginBottom: '35px',
    fontFamily: 'montserrat',
    fontWeight: '700',
    fontSize: '27px',
    lineHeight: '32.91px',
    color: '#333333',
    borderRadius: '60px'
})

export const ResultText = styled("p", {
    position: 'absolute',
    left: '47.62%',
    right: '11.75%',
    top: '89.17%',
    bottom: '8.98%',
    fontFamily: 'montserrat',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19.5px',
    color: '#000000'
})
