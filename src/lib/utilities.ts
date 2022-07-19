// If max = 2, it will return 0 or 1
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const getNonDuplicatedRandomInt = (
  max: number,
  oldValue: number
): number => {
  const newValue = Math.floor(Math.random() * max);
  if (newValue !== oldValue) {
    return newValue;
  }

  return getNonDuplicatedRandomInt(max, oldValue);
};

export const handle = async <T>(
  promise: Promise<T>,
  defaultError: any = "rejected"
): Promise<T[] | [any, T]> => {
  return promise
    .then((data) => [undefined, data])
    .catch((error) => Promise.resolve([error || defaultError, undefined]));
};

// Based on discussion:
// https://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document

export type ElementPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const getElementPosition = (element: HTMLElement): ElementPosition => {
  const box = element.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const x = box.left + scrollLeft - clientLeft;
  const y = box.top + scrollTop - clientTop;

  return {
    x: x,
    y: y,
    width: box.width,
    height: box.height,
  };
};

// Debounce function
// ref: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_debounce

export const debounce = (func: any, wait: number, immediate?: boolean) => {
  let timeout: NodeJS.Timeout;

  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);

    if (immediate && !timeout) func.apply(context, args);
  };
};

import { useEffect, useState } from "react";

export type TWindowDimensions = {
  width: number;
  height: number;
};

export const useWindowDimension = () => {
  const [windowDimensions, setWindowDimensions] =
    useState<TWindowDimensions>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const getWindowDimensions = (): { width: number; height: number } => {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      return {
        width,
        height,
      };
    };

    setWindowDimensions(getWindowDimensions());

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
