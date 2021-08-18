import htm from "./htm.mjs";
import { render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options } from "./preact.mjs";
import { subscribers, getCurrentUrl, route, Router, Route, Link, exec } from "./preact-router.mjs";

const html = htm.bind(h);

export {
  htm,
  html,
  render,
  hydrate,
  createElement,
  h,
  Fragment,
  createRef,
  isValidElement,
  Component,
  cloneElement,
  createContext,
  toChildArray,
  options,
  subscribers,
  getCurrentUrl,
  route,
  Router,
  Route,
  Link,
  exec
}
