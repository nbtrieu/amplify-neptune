/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KeywordSearchBoxOverridesProps = {
    KeywordSearchBox?: PrimitiveOverrideProps<ViewProps>;
    Copy?: PrimitiveOverrideProps<FlexProps>;
    "Search by keyword"?: PrimitiveOverrideProps<TextProps>;
    "Search for leads based on their area of interests"?: PrimitiveOverrideProps<TextProps>;
    "Submit Button"?: PrimitiveOverrideProps<FlexProps>;
    Field?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    "chevron-down"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Button-New"?: PrimitiveOverrideProps<FlexProps>;
    Submit?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KeywordSearchBoxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: KeywordSearchBoxOverridesProps | undefined | null;
}>;
export default function KeywordSearchBox(props: KeywordSearchBoxProps): React.ReactElement;
