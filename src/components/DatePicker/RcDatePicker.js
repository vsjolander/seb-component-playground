import {IconArrowLeft, IconArrowRight, IconCalendar, IconChevronLeft, IconChevronRight} from "../../icons";
import Picker from "rc-picker";
import React from "react";
import generateConfig from "./dateConfig";
import moment from "moment";
import {LOCALE} from './consts'

const disabledDateFn = (date) => {
    const weekday = moment(date).weekday();
    if (weekday === 5 || weekday === 6) {
        return true
    }

    return false;
}

const defaultValue = moment('2019-11-28 01:02:03');

const RcDatePicker = () => {
    const [value, setValue] = React.useState(defaultValue);
    const weekRef = React.useRef(null);

    const onSelect = (newValue) => {
        console.log('Select:', newValue);
    };

    const onChange = (newValue, formatString) => {
        console.log('Change:', newValue, formatString);
        setValue(newValue);
    };

    const sharedProps = {
        disabledDate: disabledDateFn,
        generateConfig,
        value,
        onSelect,
        onChange,
        onClose: () => console.log('close'),
        tabIndex: 1
    };
    return (
        <Picker {...sharedProps}
                locale={ LOCALE }
                prevIcon={ <IconChevronLeft width={16} height={16} /> }
                suffixIcon={ <IconCalendar /> }
                nextIcon={ <IconChevronRight width={16} height={16}  /> }
                superPrevIcon={ <IconArrowLeft width={16} height={16}  /> }
                superNextIcon={ <IconArrowRight width={16} height={16}  /> }
        />
    )
}

export default RcDatePicker;