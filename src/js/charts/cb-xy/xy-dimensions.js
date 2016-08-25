var chartSizes = require("../../config/chart-sizes");

// TODO: jsDocify this if it works

/**
 * see [ChartConfig#calculateDimensions](#chartconfig/calculatedimensions)
 * @see ChartConfig#calculateDimensions
 * @instance
 * @memberof xy_config
 */
function calculate_xy_dimensions(width, opts) {
	var height;
	var aspectRatio = opts.displayConfig.aspectRatio;
	var metadata = opts.model.metadata;

	if (opts.enableResponsive) {
		// use current width
	} else {
		width = chartSizes[metadata.size].width;

	}

	switch (metadata.size) {
		case "auto":
			height = width * aspectRatio.wide;
			break;

		case "printTwo":
			height = width * aspectRatio.wide;
			break;

		case "onlineVertical":
			height = width * aspectRatio.vertical;
			break;

		case "onlineHalf":
			height = width * aspectRatio.horizontal;
			break;

		default:
			height = width * aspectRatio.wide;
	}

	return {
		width: width,
		height: height + opts.extraHeight
	};
}

module.exports = calculate_xy_dimensions;
