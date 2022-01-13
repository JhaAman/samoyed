import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@supabase/ui";
import router from "next/router";
import React, { Dispatch, Fragment, ReactElement, SetStateAction } from "react";

interface Props {
  handleForward: () => void;
  handleBack: () => void;
  isWaitlistOpen: boolean;
  setIsWaitlistOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Preorder({
  handleForward,
  handleBack,
  isWaitlistOpen,
  setIsWaitlistOpen,
}: Props): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-tr from-hero-left to-hero-right">
      <Transition appear show={isWaitlistOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsWaitlistOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Request Access
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Don{"'"}t like saving money? That{"'"}s alright - just fill
                    out this super quick form and we{"'"}ll email you when Rosie
                    {"'"}s ready!
                  </p>
                </div>

                <div className="flex mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md text-rosie-900 bg-rosie-100 hover:bg-rosie-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rosie-500"
                    onClick={() => {
                      setIsWaitlistOpen(false);
                      router.push("/signup");
                    }}
                  >
                    Join Waitlist
                  </button>
                  <button
                    type="button"
                    className="mx-3 text-sm text-overlay-dark hover:text-primary"
                    onClick={() => {
                      setIsWaitlistOpen(false);
                    }}
                  >
                    Nevermind
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <h1 className="mb-8 text-3xl">Preorder Rosie Today</h1>

      <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
        <div className="flex flex-col animate-fade-in-down rounded-xl w-72 h-96 bg-surface">
          <div className="flex flex-col items-center justify-between rounded-t-xl bg-gradient-to-br from-[#C545F7] to-[#456FF7] w-72 h-72">
            <h3 className="mt-4 text-xl">Monthly</h3>
            <span className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl">$35/month</h2>
              {/* <p>LIFETIME ACCESS</p> */}
            </span>
            <h4 className="mb-2">Join the Waitlist</h4>
          </div>
          <div className="flex items-center justify-center flex-1 animate-fade-in-down">
            <Button
              className="flex items-center justify-center lowercase"
              onClick={
                () => setIsWaitlistOpen(true)
                // TODO: implement
              }
            >
              <span className="">Request Access</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col animate-fade-in-down rounded-xl w-72 h-96 bg-surface">
          <div className="flex flex-col items-center justify-between rounded-t-xl bg-gradient-to-br from-primary to-[#F74545] w-72 h-72">
            <h3 className="mt-4 text-xl">Earlybird</h3>
            <span className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl">$145</h2>
              <p>LIFETIME ACCESS</p>
            </span>
            <h4 className="mb-2">{"87/100"} seats left</h4>
          </div>
          <div className="flex items-center justify-center flex-1 animate-fade-in-down">
            <Button
              className="flex items-center justify-center lowercase"
              onClick={() => {
                window.open(
                  "https://buy.stripe.com/4gw3cQ78vbeHbaU4gg",
                  "_blank" // <- This is what makes it open in a new window.
                );
              }}
            >
              <a
              // target="_blank"
              // href="https://buy.stripe.com/4gw3cQ78vbeHbaU4gg"
              // rel="noopener noreferrer"
              >
                Preorder
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col animate-fade-in-down rounded-xl w-72 h-96 bg-surface">
          <div className="flex flex-col items-center justify-between rounded-t-xl bg-gradient-to-br from-[#F74545] to-[#F7A145] w-72 h-72">
            <h3 className="mt-4 text-xl">Lifetime</h3>
            <span className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl">$225</h2>
              <p>LIFETIME ACCESS</p>
            </span>
            <h4 className="mb-2">{"99/100"} seats left</h4>
          </div>
          <div className="flex items-center justify-center flex-1 animate-fade-in-down">
            <Button
              className="flex items-center justify-center lowercase"
              onClick={() => {
                window.open(
                  "https://buy.stripe.com/28o00EfF1eqTfraeUV",
                  "_blank" // <- This is what makes it open in a new window.
                );
              }}
            >
              <a
              // target="_blank"
              // href="https://buy.stripe.com/28o00EfF1eqTfraeUV"
              // rel="noopener noreferrer"
              >
                Preorder
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8">
        {/* TODO: get emails for non-subscribing people */}
        {/* <button
      onClick={() => handleForward()}
      className="flex items-center py-2 mt-4 text-sm font-medium text-white transition transform rounded-full animate-fade-in-down backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
    >
      <span className="">
        Press{" "}
        <span className="px-1 py-0.5 rounded m-1 font-bold bg-primary-dark">
          enter
        </span>{" "}
        to see FAQ <span className="w-5 h-5 opacity-70">&#8594;</span>
      </span>
    </button> */}

        <button
          onClick={() => handleBack()}
          className="flex items-center py-1 text-sm font-medium text-white transition transform rounded-full animate-fade-in-down backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
        >
          <span className="">
            <span className="w-5 h-5 opacity-70">&#8592;</span>
            <span className="px-1 py-0.5 rounded m-1 font-bold bg-primary-dark">
              backspace
            </span>{" "}
            to go back
          </span>
        </button>
      </div>
    </div>
  );
}
