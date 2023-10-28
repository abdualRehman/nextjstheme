'use client';

import { useEffect } from "react";
import { useSearchLayout } from "../utils/hooks/layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector, } from "react-redux";
import LoadingIndicator from "./loadingUI";
// ----------------------------------------------------------------------



export default function IframeHOC({ children }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const configID = router.query.config || "";
    const { data, loading } = useSearchLayout(configID);

    useEffect(() => {

        if (configID && data?.config) {
            dispatch({ type: 'CONFIG', payload: data.config })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])


    // if (loading) {
    //     return <LoadingIndicator />;
    // }
    return children;
}
