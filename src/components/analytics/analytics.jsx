"use client"
import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-J5276ETG1L"; 

ReactGA.initialize(GA_TRACKING_ID);

const Analytics = () => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);

    return null;
};

export default Analytics;
