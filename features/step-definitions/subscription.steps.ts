import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../PageObjects/MainPage";
import { ResultPage } from "../PageObjects/ResultPage";

When(/^I click on the button "Попробовать плюс"$/, async () => {
  await (await getWebElement(MainPage.subscribtionLink)).click();
});
Then(/^I should see that the button "Оформить подписку" is enabled$/, async () => {
  const checkButton = await getWebElement(ResultPage.subscriptionButton);
  expect(await checkButton.isEnabled());
});