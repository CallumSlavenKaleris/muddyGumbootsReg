/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
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
export declare type SoloRegistrationCreateFormInputValues = {
    category?: string;
};
export declare type SoloRegistrationCreateFormValidationValues = {
    category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SoloRegistrationCreateFormOverridesProps = {
    SoloRegistrationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SoloRegistrationCreateFormProps = React.PropsWithChildren<{
    overrides?: SoloRegistrationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SoloRegistrationCreateFormInputValues) => SoloRegistrationCreateFormInputValues;
    onSuccess?: (fields: SoloRegistrationCreateFormInputValues) => void;
    onError?: (fields: SoloRegistrationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SoloRegistrationCreateFormInputValues) => SoloRegistrationCreateFormInputValues;
    onValidate?: SoloRegistrationCreateFormValidationValues;
} & React.CSSProperties>;
export default function SoloRegistrationCreateForm(props: SoloRegistrationCreateFormProps): React.ReactElement;
