import React from "react";
import { ContentContainer } from "../ui";
import { Button, Separator } from "@instill-ai/design-system";

export const PriceTable = () => {
  return (
    <ContentContainer
      margin="my-[20px]"
      contentMaxWidth="max-w-[1127px] xl:block hidden"
    >
      <div
        className="rounded-sm rounded-b-sm bg-cover bg-no-repeat shadow-md"
        style={{
          backgroundImage: 'url("/images/pricing/bg.svg")',
          backgroundSize: 1400,
          backgroundPosition: "bottom",
        }}
      >
        <div className="bg-[#FFFFFF99] bg-opacity-80 backdrop-blur-sm">
          <div className="flex flex-row py-3">
            <div className="w-[20%]"></div>
            <div className="w-[15%] px-6">
              <p className="mb-2 font-sans text-[16px] font-medium text-[#475467]">
                Free
              </p>
              <p className="text-[14px] text-[#475467]">For everyone</p>
            </div>
            <div className="w-[15%] px-6">
              <p className="mb-2 font-sans text-[16px] font-medium text-[#475467]">
                Starter
              </p>
              <div className="h-[64px]">
                <p className="text-[14px] font-normal text-[#475467]">
                  For professional individuals
                </p>
              </div>
              <p className="mt-4 text-[14px] font-semibold text-[#475467]">
                $19 per month
              </p>
            </div>
            <div className="w-[15%] px-6">
              <p className="mb-2 font-sans text-[16px] font-medium text-[#475467]">
                Team
              </p>
              <div className="h-[64px]">
                <p className="text-[14px] font-normal text-[#475467]">
                  For small teams
                </p>
              </div>
              <p className="mt-4 text-[14px] font-semibold text-[#475467]">
                $199 per month
              </p>
            </div>
            <div className="w-[15%] px-6">
              <p className="mb-2 font-sans text-[16px] font-medium text-[#475467]">
                Team Pro
              </p>
              <div className="h-[64px]">
                <p className="text-[14px] font-normal text-[#475467]">
                  For teams with advanced collaboration
                </p>
              </div>
              <p className="mt-4 text-[14px] font-semibold text-[#475467]">
                $499 per month
              </p>
            </div>
            <div className="w-[20%] px-6">
              <p className="mb-2 font-sans text-[16px] font-medium text-[#475467]">
                Enterprise
              </p>
              <div className="h-[64px]">
                <p className="text-[14px] font-normal text-[#475467]">
                  Security, support, and flexible deployment that meets
                  performance needs
                </p>
              </div>
              <Button
                type="button"
                className="mx-auto mt-3"
                variant="primary"
                size="md"
              >
                Talk To Us
              </Button>
            </div>
          </div>
          <Separator orientation="horizontal" className="mt-3" />
          <div className="flex flex-row">
            <div className="flex h-[72px] w-[20%] items-center px-6 py-4">
              <p className="text-[14px] font-medium text-[#8C8C8C]">Users</p>
            </div>
            <div className="flex h-[72px] w-[15%] items-center px-6 py-4">
              <p className="text-[14px] font-normal text-[#8C8C8C]">1</p>
            </div>
            <div className="flex h-[72px] w-[15%] items-center px-6 py-4">
              <p className="text-[14px] font-normal text-[#8C8C8C]">1</p>
            </div>
            <div className="flex h-[72px] w-[15%] items-center px-6 py-4">
              <p className="text-[14px] font-normal text-[#8C8C8C]">3</p>
            </div>
            <div className="flex h-[72px] w-[15%] items-center px-6 py-4">
              <p className="text-[14px] font-normal text-[#8C8C8C]">
                Unlimited
              </p>
            </div>
            <div className="flex h-[72px] w-[20%] items-center px-6 py-4">
              <p className="text-[14px] font-normal text-[#8C8C8C]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-medium text-[#1D2433]">Features</p>
            </div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[20%] px-6 py-3"></div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Pipeline runs per month
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">500</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">10,000</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">100,000</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                1,000,000
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Number of pipelines
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Dashboard
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Instill Credit
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">500</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">1,000</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">10,000</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">50,000</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">Custom</p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                BYO API Key
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">Failover</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">?</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Auto-retries
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Version control
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Scheduled pipeline
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Number of public models
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">10</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">50</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Number of private models
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">2</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">5</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">10</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Model image registry quota
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">512MB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">1GB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">10GB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">100GB</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Model runs per month
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">500</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">10,000</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">100,00</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                1,000,000
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Persistent model serving
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Model fine-tuning
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Pre-built RAG pipeline template
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Custom RAG pipeline
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Knowledge base
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">1</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">1</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">1</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">5</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Knowledge base storage per quota
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">10MB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">200MB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">1GB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">1GB</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Document upload
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">20</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">100</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Document upload
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">20</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">100</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Document storage total quota
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">512MB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">1GB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">10GB</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">100GB</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Log history
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">15 days</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Unlimited
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#1D2433]">
                Infrastructure and security
              </p>
            </div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[20%] px-6 py-3"></div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Access control
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                SSO Login
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Private cloud deployment
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                On-premise Deployment
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>

          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#1D2433]">Support</p>
            </div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[20%] px-6 py-3"></div>
          </div>

          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Community support on Discord
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Dedicated Slack channel, email
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#EAFBF5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9457 8.62096L11.5923 16.6826L9.37568 14.3143C8.96734 13.9293 8.32568 13.906 7.85901 14.2326C7.40401 14.571 7.27568 15.166 7.55568 15.6443L10.1807 19.9143C10.4373 20.311 10.8807 20.556 11.3823 20.556C11.8607 20.556 12.3157 20.311 12.5723 19.9143C12.9923 19.366 21.0073 9.81096 21.0073 9.81096C22.0573 8.73762 20.7857 7.79262 19.9457 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Email response time (business hours)
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                Talk to us
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#1D2433]">
                Add on: Instill Enterprise Additional Proffessional Services
              </p>
            </div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[15%] px-6 py-3"></div>
            <div className="w-[20%] px-6 py-3"></div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Custom pipeline building or component development
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.400391"
                    width="28"
                    height="28"
                    rx="14"
                    fill="#EAFBF5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3461 8.62096L11.9927 16.6826L9.77607 14.3143C9.36773 13.9293 8.72607 13.906 8.2594 14.2326C7.8044 14.571 7.67607 15.166 7.95607 15.6443L10.5811 19.9143C10.8377 20.311 11.2811 20.556 11.7827 20.556C12.2611 20.556 12.7161 20.311 12.9727 19.9143C13.3927 19.366 21.4077 9.81096 21.4077 9.81096C22.4577 8.73762 21.1861 7.79262 20.3461 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Dedicated solution researcher/engineer
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.400391"
                    width="28"
                    height="28"
                    rx="14"
                    fill="#EAFBF5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3461 8.62096L11.9927 16.6826L9.77607 14.3143C9.36773 13.9293 8.72607 13.906 8.2594 14.2326C7.8044 14.571 7.67607 15.166 7.95607 15.6443L10.5811 19.9143C10.8377 20.311 11.2811 20.556 11.7827 20.556C12.2611 20.556 12.7161 20.311 12.9727 19.9143C13.3927 19.366 21.4077 9.81096 21.4077 9.81096C22.4577 8.73762 21.1861 7.79262 20.3461 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex flex-row">
            <div className="w-[20%] py-3 pl-8 pr-6">
              <p className="text-[14px] font-medium text-[#8C8C8C]">
                Premium support with SLA of 8 business hours for email response
                time
              </p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[15%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">-</p>
            </div>
            <div className="w-[20%] px-6 py-3">
              <p className="text-[14px] font-normal text-[#475467]">
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.400391"
                    width="28"
                    height="28"
                    rx="14"
                    fill="#EAFBF5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3461 8.62096L11.9927 16.6826L9.77607 14.3143C9.36773 13.9293 8.72607 13.906 8.2594 14.2326C7.8044 14.571 7.67607 15.166 7.95607 15.6443L10.5811 19.9143C10.8377 20.311 11.2811 20.556 11.7827 20.556C12.2611 20.556 12.7161 20.311 12.9727 19.9143C13.3927 19.366 21.4077 9.81096 21.4077 9.81096C22.4577 8.73762 21.1861 7.79262 20.3461 8.60929V8.62096Z"
                    fill="#23956F"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
