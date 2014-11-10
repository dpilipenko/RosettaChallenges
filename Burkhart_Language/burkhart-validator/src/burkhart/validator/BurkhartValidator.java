/**
 * 
 */
package burkhart.validator;

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
			System.out.println('1');
			break;
		}
	}

}
