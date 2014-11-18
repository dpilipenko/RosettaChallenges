package burkhart.validator;

import static org.junit.Assert.*;

import org.junit.Test;

public class BurkhartTests {
	
	@Test
	public void test1() {
		String input = "{}";
		assertTrue(BurkhartValidator.doValidate(input));
	}
	@Test
	public void test2() {
		String input = "{(}";
		assertFalse(BurkhartValidator.doValidate(input));
	}
	@Test
	public void test3() {
		String input = "{()}";
		assertTrue(BurkhartValidator.doValidate(input));
	}
	@Test
	public void test4() {
		String input = "{(})";
		assertFalse(BurkhartValidator.doValidate(input));
	}
	
	@Test
	public void ExampleGOOD() {
		String input = "{\n"
				+ "Dog dog hello kitty%\n"
				+ "[][][]\n"
				+ "[<ROSETTA THINGS%>]\n"
				+ "(PPPPPPPPPPP%<%%%>)\n"
				+ "[{}{}]\n"
				+ "}\n";
		assertTrue(BurkhartValidator.doValidate(input));
	}
	
	@Test
	public void ExampleBAD() {
		String input = 
			"{\n"
			+ "EVERYTHING IS NOT OKAY\n"
			+ "}\n"
			+ "]\n";
		assertFalse(BurkhartValidator.doValidate(input));
	}
	
}
