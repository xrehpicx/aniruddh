import React, { useState, useEffect } from "react";
import { useTransition, a } from "react-spring";
import shuffle from "lodash/shuffle";
import useMeasure from "../useMeasure";
import useMedia from "../useMedia";
import "./Grid.css";
function rotate(array) {
  const lastval = array.pop();
  return [lastval, ...array];
}
function Grid({ edges }) {
  const columns = useMedia(
    [
      "(min-width: 2400px)",
      "(min-width: 1900px)",
      "(min-width: 1500px)",
      "(min-width: 1000px)",
      "(min-width: 600px)",
    ],
    [6, 5, 4, 3, 2],
    1
  );

  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hook3: Hold items
  const [items, set] = useState([]);
  const [rs, setRs] = useState(columns === 1 ? false : true);
  const [fs, setFs] = useState(false);

  useEffect(() => {
    (async () => {
      let images = [];
      for (let edge of edges) {
        images.push({
          css: `url(${edge.node.display_url})`,
          ...edge.node.dimensions,
          code: edge.node.shortcode,
        });
      }
      set(images);
    })();
  }, [edges]);
  // Hook4: shuffle data every 2 seconds
  useEffect(() => {
    const rotateInterval = setInterval(() => set(rotate), 3000);
    const shuffelInterval = setInterval(() => set(shuffle), 10000);
    // console.log((screenSaver.ss = true));

    if (!rs) {
      try {
        clearInterval(rotateInterval);
        clearInterval(shuffelInterval);
      } catch (error) {}
    }

    const fsshuffelInterval = setInterval(() => set(shuffle), 3000);

    if (fs) {
      try {
        clearInterval(rotateInterval);
        clearInterval(shuffelInterval);
      } catch (error) {}
    } else {
      clearInterval(fsshuffelInterval);
    }
    const onfullscreen = (event) => {
      if (document.fullscreenElement) {
        setFs(true);
      } else {
        setFs(false);
      }
    };
    document.addEventListener("fullscreenchange", onfullscreen);

    return () => {
      try {
        clearInterval(rotateInterval);
        clearInterval(shuffelInterval);
        document.removeEventListener("fullscreenchange", onfullscreen);
      } catch (error) {}
    };
  }, [rs, fs]);
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 };
  });
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 68 },
    trail: 25,
  });
  // Render the grid
  return (
    <>
      <div {...bind} className="list" style={{ height: Math.max(...heights) }}>
        {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <a.div
            key={key}
            style={{
              transform: xy.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
              ...rest,
            }}
          >
            <div
              className={rs ? "" : "active-image"}
              // onMouseDown={() => setRs(false)}
              // onMouseUp={() => setRs(true)}
              onClick={() =>
                window.open(`https://www.instagram.com/p/${item.code}/`)
              }
              style={{ backgroundImage: item.css }}
            />
          </a.div>
        ))}
      </div>
    </>
  );
}

export default Grid;
