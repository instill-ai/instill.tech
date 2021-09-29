## CI/CD process

1. Staging: PR -> Trigger slack bot deliver announcement -> Build -> Trigger slack bot to deliver result
2. unit test
3. integration test
4. end-to-end test(optional)
5. Prod: PR -> Trigger slack bot deliver announcement -> Build -> Lighthouse -> Trigger slack bot to deliver result