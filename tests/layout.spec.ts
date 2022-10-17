import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const TOPBAR_LINKS = [
  ['Careers', '/careers'],
  ['Help', '/help'],
  ['Buyer Protection', '/buyer'],
  ['Download Mobile App', 'https://play.google.com/store/apps'],
];

const MENU_ITEMS = ['Men', 'Women', 'Kids', 'Sale', 'Blog', 'Contacts'];

test.describe('Header', () => {
  test.describe('Top Bar', () => {
    test('Links in the top bar should redirect to the correct page', async ({
      page,
    }) => {
      for (const item of TOPBAR_LINKS) {
        await testLink(page, item[0], item[1]);
        await page.goBack();
      }
    });

    test('Change website language to de', async ({ page }) => {
      await page.getByRole('img', { name: 'en locale' }).click();

      await page.getByRole('link', { name: 'de locale German' }).click();
      await expect(page).toHaveURL('/de');

      await expect(page.getByRole('link', { name: 'Hilfe' })).toBeVisible();
      await expect(page.getByPlaceholder('Suche')).toBeEditable();
      await expect(page.getByRole('link', { name: 'Kinder' })).toBeVisible();
    });

    test('Change website language to en', async ({ page }) => {
      await page.goto('/de');

      await page.getByRole('img', { name: 'de locale' }).click();

      await page.getByRole('link', { name: 'en locale English' }).click();
      await expect(page).toHaveURL('/');

      await expect(page.getByRole('link', { name: 'Help' })).toBeVisible();
      await expect(page.getByPlaceholder('Search')).toBeEditable();
      await expect(page.getByRole('link', { name: 'Kids' })).toBeVisible();
    });
  });

  test.describe('Menu', () => {
    test('Should clear search box when the clear icon clicked', async ({
      page,
    }) => {
      await page.getByPlaceholder('Search').fill('Jeans');

      await expect(page.getByTestId('clear')).toBeVisible();
      await expect(page.getByPlaceholder('Search')).toHaveValue('Jeans');

      await page.getByTestId('clear').click();

      await expect(page.getByTestId('clear')).not.toBeVisible();
      await expect(page.getByPlaceholder('Search')).toBeEmpty();
    });

    test('Clicking the logo should redirect to homepage', async ({ page }) => {
      await testLink(page, 'logo', '/');
    });

    test('Menu items should redirect to the correct page', async ({ page }) => {
      for (const item of MENU_ITEMS) {
        await testLink(page, item, item.toLowerCase());
        await page.goBack();
      }
    });
  });

  test.describe('Mega Menu', () => {
    // Hover on menu item to show mega menu before each test
    test.beforeEach(async ({ page }) => {
      await page.getByRole('link', { name: 'Men' }).hover();
    });

    test('Mega menu should popup on menu item hover', async ({ page }) => {
      await expect(page.getByRole('link', { name: 'Shoes' })).toBeVisible();
      await expect(page.getByRole('link', { name: "All Men's" })).toBeVisible();
    });

    test('Collections should redirect to the correct page', async ({
      page,
    }) => {
      await testLink(page, 'Shoes', '/men/shoes');
    });

    test('SubCollections should redirect to the correct page', async ({
      page,
    }) => {
      await testLink(page, 'Sneakers', '/men/shoes/sneakers');
    });
  });

  /** Todo
   * test search box functionality
   */
});

const testLink = async (page: Page, name: string, URL: string) => {
  await page.getByRole('link', { name }).click();
  await expect(page).toHaveURL(URL);
};
