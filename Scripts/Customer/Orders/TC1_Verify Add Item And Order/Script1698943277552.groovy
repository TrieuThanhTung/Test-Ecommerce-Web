import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.setViewPortSize(1920, 1280)

WebUI.navigateToUrl('http://localhost:5000/login')

WebUI.setText(findTestObject('Object Repository/Page_Web Phone/Order/input_Username_username'), 'katalon1')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_Web Phone/Order/input_Password_password'), 'JlrLFiaChPT/t2ALXwZl0g==')

WebUI.click(findTestObject('Object Repository/Page_Web Phone/Order/button_Login'))

WebUI.scrollToElement(findTestObject('Page_Web Phone/Order/img'), 1)

WebUI.click(findTestObject('Page_Web Phone/Order/img'))

WebUI.click(findTestObject('Page_Web Phone/Order/a_Quick View'))

WebUI.click(findTestObject('Object Repository/Page_Web Phone/Order/button_Add to cart'))

WebUI.click(findTestObject('Object Repository/Page_Web Phone/Order/button_OK'))

WebUI.click(findTestObject('Object Repository/Page_Web Phone/Order/button_View detail'))

WebUI.click(findTestObject('Object Repository/Page_Web Phone/Order/button_Add to cart_1'))

WebUI.click(findTestObject('Object Repository/Page_Web Phone/Order/button_OK'))

WebUI.click(findTestObject('Page_Web Phone/Order/div_Contact_shopCart'))

WebUI.click(findTestObject('Object Repository/Page_Web Phone/Order/a_Check Out'))

WebUI.setText(findTestObject('Object Repository/Page_Web Phone/Order/input_Shipping_name'), 'katalon')

WebUI.setText(findTestObject('Object Repository/Page_Web Phone/Order/input_Shipping_mobilenumber'), '0123456789')

WebUI.setText(findTestObject('Object Repository/Page_Web Phone/Order/input_Shipping_address'), 'Ha Noi')

WebUI.click(findTestObject('Object Repository/Page_Web Phone/Order/button_Check out'))

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_Web Phone/Order/div_Thank you for your purchase'), 3)

WebUI.closeBrowser()

