/**
 * 
 */
package burkhart.validator;

import static org.junit.Assert.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * @author Dmitriy Pilipenko
 *
 */
public class BurkhartValidatorTest {

	private final ByteArrayOutputStream outContent = new ByteArrayOutputStream();
	private final ByteArrayOutputStream errContent = new ByteArrayOutputStream();
	
	@Before
	public void setUpStreams() {
		 System.setOut(new PrintStream(outContent));
		 System.setErr(new PrintStream(errContent));
	}
	
	/**
	 * Test Zero Input Arguments
	 */
	@Test
	public void testNoInputArgument() {
		BurkhartValidator.main(new String[] {});
		assertEquals('0', outContent.toByteArray()[0]);
	}
	
	/**
	 * Test for valid File
	 */
	@Test
	public void testInputArgument() {
		BurkhartValidator.main(new String[] {"LoremIpsum.txt"});
		assertEquals('1', outContent.toByteArray()[0]);
	}
	
	@After
	public void cleanUpStreams() {
		System.setOut(null);
		System.setErr(null);
	}

}
