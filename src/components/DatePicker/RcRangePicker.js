import {IconArrowLeft, IconArrowRight, IconCalendar, IconChevronLeft, IconChevronRight} from "../../icons";
import Picker, {RangePicker} from "rc-picker";
import React from "react";
import generateConfig from "./dateConfig";
import moment from "moment";
import {LOCALE} from "./consts";

const defaultValue = moment('2019-11-28 01:02:03');

const RcRangePicker = () => {
    const [value, setValue] = React.useState(defaultValue);
    const weekRef = React.useRef(null);

    const onSelect = (newValue) => {
        console.log('Select:', newValue);
    };

    const onChange = (newValue, formatString) => {
        console.log('Change:', newValue, formatString);
        setValue(newValue);
    };


    const rangedProps = {
        generateConfig,
        value,
        onSelect,
        onChange
    };
    return (
        <RangePicker {...rangedProps}
                     locale={ LOCALE }
                     prevIcon={ <IconChevronLeft width={16} height={16} /> }
                     suffixIcon={ <IconCalendar /> }
                     nextIcon={ <IconChevronRight width={16} height={16}  /> }
                     superPrevIcon={ <IconArrowLeft width={16} height={16}  /> }
                     superNextIcon={ <IconArrowRight width={16} height={16}  /> }
                     separator={'-'}
        />
    )
}

export default RcRangePicker