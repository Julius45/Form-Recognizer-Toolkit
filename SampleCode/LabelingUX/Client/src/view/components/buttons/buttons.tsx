import * as React from "react";
import { DefaultButton, IconButton, NeutralColors } from "@fluentui/react";

import { getWithAutoRetry, postWithAutoRetry } from "apis/requestHelper";

import "./buttons.scss";

export const CloseButton = (props: { onClick: () => void }): JSX.Element => {
    return (
        <IconButton
            className="close-button"
            iconProps={{ iconName: "Cancel" }}
            ariaLabel="Close"
            onClick={props.onClick}
            styles={{ rootHovered: { color: NeutralColors.gray130 }, rootPressed: { color: NeutralColors.gray130 } }}
        />
    );
};

export const DefaultIconButton = (props: {
    name: string;
    disabled: boolean;
    title?: string;
    onClick: () => void;
    ariaLabel?: string;
}): JSX.Element => {
    return (
        <IconButton
            iconProps={{ iconName: props.name }}
            title={props.title}
            ariaLabel={props.ariaLabel}
            onClick={props.onClick}
            disabled={props.disabled}
            styles={{
                root: { color: NeutralColors.gray160 },
                rootHovered: { color: NeutralColors.gray160 },
                rootPressed: { color: NeutralColors.gray160 },
                rootDisabled: { color: NeutralColors.gray60, backgroundColor: "transparent" },
            }}
        />
    );
};

export const DrawRegionButton = (props: { onClick: () => void; disabled: boolean; checked: boolean }): JSX.Element => {
    return (
        <DefaultButton
            iconProps={{ iconName: "SingleColumnEdit" }}
            ariaLabel="Draw Region"
            onClick={props.onClick}
            disabled={props.disabled}
            toggle
            checked={props.checked}
            styles={{ root: { border: 0 } }}
        >
            Region
        </DefaultButton>
    );
};

export const ApiButton = (props: { disabled: boolean }): JSX.Element => {
    const getApi = async () => {
        try {
            const response = await getWithAutoRetry("https://jsonplaceholder.typicode.com/users");
            console.log(response.data);
            //const filename = "users.json";
            await postWithAutoRetry("${serverUrl}/files/${filename}", response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <DefaultButton
            iconProps={{ iconName: "CloudDownload" }}
            ariaLabel="Call API"
            onClick={getApi}
            disabled={props.disabled}
            styles={{ root: { border: 0 } }}
        >
            Call API
        </DefaultButton>
    );
};
