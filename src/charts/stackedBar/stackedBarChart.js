import stackedBarChart from 'britecharts/dist/umd/stackedBar.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

import { bar as stackedBarLoadingState } from 'britecharts/dist/umd/loading.min';

const stackedBar = {};

stackedBar.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = stackedBarChart();

    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

stackedBar.update = (el, data, configuration = {}, chart) => {
    let container = select(el);

    validateContainer(container);
    validateConfiguration(chart, configuration);
    applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    if (data && data.length) {
        container.datum(data).call(chart);
    } else {
        container.call(chart);
    }

    return chart;
};

stackedBar.destroy = () => {};

stackedBar.loading = () => stackedBarLoadingState;

export default stackedBar;
