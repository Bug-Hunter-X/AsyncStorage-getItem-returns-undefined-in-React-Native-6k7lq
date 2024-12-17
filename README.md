# AsyncStorage getItem returns undefined in React Native

This repository demonstrates a common issue encountered when using AsyncStorage in React Native: `getItem` returning `undefined` even after successfully storing data. This occurs because the `getItem` method is asynchronous, and the data isn't immediately available.

## Problem

The provided `bug.js` file showcases a scenario where the code attempts to access the value returned by `AsyncStorage.getItem` before the asynchronous operation completes.  This results in `undefined` being displayed.

## Solution

The `bugSolution.js` file presents the correct approach, utilizing the `.then()` method to handle the asynchronous response.  This ensures the code waits for the data to be retrieved before using it.

## Setup

Clone the repository and run `npm install` to install the necessary packages.

## Usage

Run both the `bug.js` and `bugSolution.js` files. Compare the outputs to see the difference between incorrect and correct usage of AsyncStorage.