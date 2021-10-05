## CI Workflow

1. When push to any branch except main, do unit test (ci-unit-test)
2. Before PR into staging, check webpack bundle size difference (ci-webpack-stats-diff)
3. Before PR into main, deploy to preview and check lighthouse score

## CD Worflow

1. When PR into staging, deploy to staging preview (cd-staging-deploy)
2. When PR release into main, deploy to production (cd-prod-deploy)