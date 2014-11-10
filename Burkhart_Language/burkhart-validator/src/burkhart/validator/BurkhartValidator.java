/**
 * 
 */
package burkhart.validator;

import java.io.File;

/**
 * @author Dmitriy Pilipenko
 *
 */
public class BurkhartValidator {

	/**
	 * Expectation is that at least one argument is included. 
	 * 1 if true, 0 if false
	 * @param args
	 */
	public static void main(String[] args) {
		int argumentCount = args.length;
		switch (argumentCount) {
		case 0:
			// no arguments included.
			System.out.write('0');
			break;
		default:
			// at least one argument included
			if (doValidate(args[0])) {
				System.out.println('1');
			} else {
				System.out.println('0');
			}
			break;
		}
	}
	
	private static boolean doValidate(String input) {
		File file = new File(BurkhartValidator.class.getClassLoader().getResource(input).getPath());
		if (file.exists() && !file.isDirectory()) {
			return true;
		} else {
			return false;
		}
	}

}
