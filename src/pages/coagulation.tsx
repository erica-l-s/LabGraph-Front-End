import Head from 'next/head';
import { useState } from "react";
import Footer from '@/components/ui/Footer';
import TestSelector from '@/components/chart/TestSelector';
import NavBar from '@/components/ui/NavBar';
import ControlChart from '@/components/chart/ControlChart';
import Loading from '@/components/ui/Loading';

interface ListingItem {
    name: string;
    level: number;
    level_lot: string;
    test_lot: string;
    sd: number;
    mean: number;
    date: string;
    value: number;
    unit_value: string;
    description: string;
}

interface ListingCollection extends Array<ListingItem> { }

const list = ["TAP-20", "TTPA"];

export default function Coagulation() {

    const [dataFetched, setDataFetched] = useState<ListingCollection>([]);

    return (
        <div className="w-full min-h-svh flex justify-center items-center content-center flex-col bg-background p-2 md:p-0">
            <Head>
                <title>{`LabGraph - ${list[0] || ''}`}</title>
            </Head>
            <NavBar jsonData={dataFetched} fileName={list[0]} />
            <div className="flex flex-col justify-center items-center content-center gap-5 md:gap-4 lg:gap-0 xl:gap-8 md w-screen h-4/6 md:w-5/6 lg:w-screen xl:max-w-7xl">
                <div className="flex justify-around items-center content-center bg-background lg:p-4 rounded-lg lg:w-screen ">
                    <div className="flex justify-center items-center content-center mt-16 bg-background lg:p-4 rounded-lg lg:w-screen ">
                        {<TestSelector name={list[0]} level={1} setDataJson={setDataFetched} analyticsType={"coagulation-analytics"} list={list} />}
                    </div>
                </div>
                {!dataFetched[0] ? <Loading /> : <ControlChart listing={dataFetched} />}
                <Footer />
            </div>
        </div>
    );
}