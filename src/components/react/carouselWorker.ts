const handleNext = () => {
	self.postMessage({ type: "next" });
};

const handlePrev = () => {
	self.postMessage({ type: "prev" });
};

self.onmessage = function (e: MessageEvent) {
	const { type } = e.data;

	if (type === "next") {
		handleNext();
	} else if (type === "prev") {
		handlePrev();
	}
};
