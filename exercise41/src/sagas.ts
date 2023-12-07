import { take, call, put } from "redux-saga/effects";
import { eventChannel, EventChannel } from "redux-saga";
import { addDataPoints } from "./chartDataSlice";
import { generateRandomData } from "./dataUtils";

function createDataChannel(): EventChannel<number[]> {
  return eventChannel((emitter) => {
    const interval = setInterval(() => {
      const data = generateRandomData(10);
      emitter(data);
    }, 1000);

    return () => clearInterval(interval);
  });
}

function* watchDataChannel() {
  const dataChannel = createDataChannel();
  while (true) {
    const data = (yield take(dataChannel)) as number[];
    yield put(addDataPoints(data));
  }
}

export default function* rootSaga() {
  yield call(watchDataChannel);
}
