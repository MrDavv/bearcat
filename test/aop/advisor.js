var Advisor = require('../../lib/aop/advisor');

var expect = require('expect.js');

describe('Advisor', function() {
	describe('advisor', function() {
		it('should advice right', function(done) {
			var advisor = new Advisor();
			advisor.setPointcut(null);

			advisor.setBeanName('car');
			var r = advisor.getBeanName();
			expect(r).to.eql('car');

			done();
		});
	});
});