/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrganizationCreateFormInputValues = {
    uid?: string;
    name?: string;
    mailing_address?: string;
};
export declare type OrganizationCreateFormValidationValues = {
    uid?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    mailing_address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationCreateFormOverridesProps = {
    OrganizationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uid?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    mailing_address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganizationCreateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrganizationCreateFormInputValues) => OrganizationCreateFormInputValues;
    onSuccess?: (fields: OrganizationCreateFormInputValues) => void;
    onError?: (fields: OrganizationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationCreateFormInputValues) => OrganizationCreateFormInputValues;
    onValidate?: OrganizationCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationCreateForm(props: OrganizationCreateFormProps): React.ReactElement;
