"use client";
import React from "react";

function ErrorPage() {



  return (
    <div className="max-w-md w-full mx-auto border rounded-lg shadow-md p-6 bg-white">
    <header className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
      </div>
      <h2 className="text-2xl font-bold text-red-600">Payment Unsuccessful</h2>
      <p className="text-gray-600">
        We are sorry, but we couldn't process your payment. Please review the
        details and try again.
      </p>
    </header>
    <div className="mt-6 space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Amount:</span>
        <span className="font-medium">$99.99</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Card:</span>
        <span className="font-medium flex items-center">
          **** **** **** 1234
        </span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Error:</span>
        <span className="font-medium text-red-600">Insufficient funds</span>
      </div>
    </div>
    <footer className="mt-6">
      <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
        Try Again
      </button>
    </footer>
  </div>
  );
}

export default ErrorPage;
