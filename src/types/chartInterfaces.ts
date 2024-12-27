export interface ListingItem {
    name: string;
    level_lot: string;
    test_lot: string;
    level: number;
    sd: number;
    mean: number;
    date: string;
    value: number;
    unit_value: string;
    description: string;
    ownMeanValue: number;
    ownSdValue: number;
    rules?: string;
}

export interface ControlChartProps {
    listing: ListingItem[];
}

export interface MeanAndDeviationDisplayProps {
    mean: number;
    sd: number;
    ownMean: number | null;
    ownSd: number | null;
    unitValue: string | null;
}

export interface TestSelectorProps {
    list: string[];
    analyticsType: string;
    name: string;
    level?: number;
    setDataJson: (data: any) => void;
}

export interface ListingsData {
  level1: ListingItem[];
  level2: ListingItem[];
  level3?: ListingItem[];
}

export interface TestSelectorProps2 {
    levelListSize: number;
    list: string[];
    analyticsType: string;
    name: string;
    setListinig: (data: ListingsData) => void;
}

export interface ProcessedData {
    date: string;
    level_lot: string;
    test_lot: string;
    level: string;
    unit_value: string;
    name: string;
    value: string;
    mean: string;
    sd: string;
}

export interface ProcessingStatus {
    isProcessing: boolean;
    message: string;
    error?: string;
}

export interface MultipleLineChartProps {
    listings: ListingItem[][];
    colors?: string[];
}

export interface LabGraphProps {
    testList: string[];
    analyticsType: string;
    levelListSize: number;
}

export interface MultipleLineGraphProps {
    levelListSize: number;
    testList: string[];
    analyticsType: string;
}

export interface ListingData {
    listing: any[];
    unitValue: string | null;
    ownMean: number | null;
    ownSd: number | null;
}

export interface UrlConfig {
    dataUrl: string;
    meanDeviationUrl: string;
}
