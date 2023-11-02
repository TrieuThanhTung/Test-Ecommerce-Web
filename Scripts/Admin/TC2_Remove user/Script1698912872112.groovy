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

WebUI.openBrowser('http://localhost:5000/login')

WebUI.setViewPortSize(1920, 1280)

WebUI.setText(findTestObject('Page_Web Phone/Login/input_Username_username'), 'admin')

WebUI.setText(findTestObject('Page_Web Phone/Login/input_Password_password'), 'admin')

WebUI.click(findTestObject('Page_Web Phone/Login/button_Login'))

WebUI.verifyElementPresent(findTestObject('Page_AdminPage/a_Manager Users'), 1)

WebUI.click(findTestObject('Page_AdminPage/a_Manager Users'))

'remove acccount id = 1\r\n'
WebUI.click(findTestObject('Page_AdminPage/Manage User/i_Sun May 07 2023_fa fa-trash'))

WebUI.closeBrowser()

