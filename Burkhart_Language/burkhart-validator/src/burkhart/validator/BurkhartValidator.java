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
	
	public static boolean doValidate(String input) {
		if (input == null || input.isEmpty()) {
			return false;
		} else {
			return true;
		}
	}

}
